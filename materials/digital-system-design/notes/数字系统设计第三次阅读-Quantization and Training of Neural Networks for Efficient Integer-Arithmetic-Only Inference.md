# 数字系统设计第三次阅读——Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference

**姓名：陈天乐**

**学号：[student ID removed]**

**班级：无25**



​	随着智能移动设备的普及，深度学习模型的计算成本越来越高，如何高效且准确的基于硬件推理是一个迫在眉睫的问题。本文提出了一种量化方案，允许使用纯整数算术进行推理，比浮点数推理更加高效，延迟更低，而且对于准确率的降低完全在可接受范围之内。先前的工作只是将CNN的权重、激活值从float32转化成更低位宽数据，但是准确率降低较多，并且只是对普通的架构进行量化实验，没有对已经做过tradeoff的模型架构做实验（例如MobileNets)。文中主要从三个方面给出了一套完整的量化训练过程：量化方案、量化推理框架和量化训练框架。



## 量化方案

​	本文的量化方案是：将权重和激活值量化成int8，而少数参数（如bias）量化为int32。

​	设真实值为$r$(float),量化值为$q$(int8)，零点量化值为$Z$(int8),放缩系数为$S$（float)。则量化映射关系为：
$$
r=S(q-Z)
$$


## 量化推理框架

​	考虑两个N维矩阵的乘法：

<img src="C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250317204025500.png" alt="image-20250317204025500" style="zoom: 67%;" />

​	将量化公式代入：

<img src="C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250317204050036.png" alt="image-20250317204050036" style="zoom:67%;" />

<img src="C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250317204108475.png" alt="image-20250317204108475" style="zoom:67%;" />

​	再将这个式子展开：
$$
q^{(i,k)}_ 3 =Z_3+M(NZ_1Z_2−Z_1a_2^{(k)} −Z_2\bar{a}_1^{(i)} + \sum_{j=1}^N q_1^{(i,j)} + q_2^{(j,k)})
$$
​	这上面的式子除了M全是整数，大大节省了运算成本。

​	为了和int32位的bias相加，计算权重$q_1$和激活值$q_2$时用一个int32位的累加器求和得到最终值，最后做缩放，向下转换为uint8，应用激活函数得到最后的8位输出激活值([0,255])。	

​	

## 量化训练框架

​	在推理时，一种很简单的方法是直接将训练好的模型参数做量化，但是这种方法往往会让精确度大幅降低。因此本文在训练时就将权重做量化，并且将BN过程折叠到卷积层中，将量化影响带到训练过程。
$$
w_{fold}:=\frac{\gamma w}{\sqrt{EMA(\sigma^2_B)+\epsilon}}
$$
​	对于每一层而言，量化参数和量化函数如下：
$$
clamp(r;a,b):=min(max(x,a),b)\\
s(a,b,n):=\frac{b-a}{n-1}\\
q(r;a,b,n):=[\frac{clamp(r;a,b)-a}{s(a,b,n)}]s(a,b,n)+a
$$
​	其中，[a;b]是量化范围，n是量化阶数（对于m-bit量化，$n=2^m$）。

​	对于权重量化，$a:=min(w),b:=max(w)$。对于激活值量化，采用EMA方法来汇总激活值[a;b]的范围，并且考虑到EMA在更新激活范围时会出现明显延迟，在一开始训练时先禁用了激活值量化，这样可以让网络进入到一个更稳定的状态。

<img src="C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250317203014381.png" alt="image-20250317203014381" style="zoom:50%;" />

​	

## Performance

​	在ResNets,Inception v3,MobileNets等网络上进行测试，得到的效果都非常的好，在正确率下降不大的同时大大降低了推理速度，实现了in-time的推理，便于各种移动设备的应用。
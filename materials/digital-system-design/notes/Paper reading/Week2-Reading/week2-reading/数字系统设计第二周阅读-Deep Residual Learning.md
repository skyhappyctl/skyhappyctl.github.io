# 数字系统设计第二周阅读——Deep Residual Learning

**姓名：陈天乐**

**学号：[student ID removed]**

**班级：无25**



## 这篇文章基于什么任务（Task）验证了模型的有效性？衡量指标（Performance） 是什么？

这篇文章的模型主要面向计算机视觉任务，基于ImageNet test set，分别完成了ILSVRC 2015 classification competition、ImageNet detection、ImageNet localization、COCO detection和COCO segmentation任务。训练时使用了ImageNet中128万张图片作为训练集，5万张作为验证集，10万张作为测试集。衡量指标是top-1和top-5的分类识别准确率，并且将残差网络结果和VGG网络、平面网络的结果做横向对比。

除了ImageNet数据集，本文还用了CIFAR-10这个轻量级的数据集，使用5万张照片作为训练集，1万张照片作为测试集，用于测试这个深度网络模型的表现。

最后的结果表明，ResNet在这些任务、比赛中的表现都非常不错，取得了第一的成绩，并且和上一代网络的进步对比是非常显著的。

<img src="C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250303154950133.png" alt="image-20250303154950133" style="zoom:150%;" />



## 这篇文章提出了哪些新方法，分别用于解决什么问题？

* **深度残差网络（Deep Residual learning framework)**

  * 这篇文章指出，网络的深度对网络的表现性能有很强的重要作用，但是深度网络通常训练起来的成本更大（参数量高），会出现准确率饱和的现象，并且由于网络深度的增加，训练、测试的误差都会提高，因此用普通的训练方法对深度网络不好优化。本文提出了使用深度残差网络架构：

  ![image-20250303151116291](C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250303151116291.png)
  $$
  \mathcal{F}(x) :=\mathcal{H}(x) x.
  $$



* **Shortcut connections**

  * 由于深度增加导致网络表现会下降，在连续的几层中加入shortcut connections，缓解这一情况。这个网络架构要求输出维度和输入维度一致，否则需要做仿射变换:
    $$
    y=\mathcal{F}(x.{W_i})+W_sx
    $$
    解决网络深度导致的degration时，全同变换已经足够。并且这种结构可以不增加bottleneck架构的复杂度。

![image-20250303160559602](C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250303160559602.png)

![image-20250303162940284](C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250303162940284.png)

* **Deeper Bottleneck Architectures**

![image-20250303161939705](C:\Users\skyhappy\AppData\Roaming\Typora\typora-user-images\image-20250303161939705.png)

​	这个架构是用于缩短训练时间的（1×1卷积层用于压缩维度，经过3×3卷积层后在通过1×1卷积层扩大维度），适合深度网络架构使用。

​				

## 这篇文章有哪些问题尚未解决？

* 文章中有一个假定：**Multiple nonlinear layers can asymptotically approximate complicated functions**。这个假定在当时还尚未被解决。

* 深层网络有指数率的低收敛速率，因此影响了训练中降低训练误差的速度，对这个问题的优化方案还未解决。

* 文章中探索的超深层网络：1202层网络的表现性能比110层的网络表现要差（尽管训练误差几乎差不多），这有可能是因为过拟合。本文只使用了普通的正则化，未来可以组合使用更多更强的正则化来得到更好的结果。

  
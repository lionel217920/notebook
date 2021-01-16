# The Lost-Wakeup Problem

https://askldjd.com/2010/04/24/the-lost-wakeup-problem/

在多线程编程中，`丢失唤醒`是一个敏感的问题，会导致一个线程由于竞争条件而错过`唤醒`

显而易见，一个错过唤醒的线程会一致`sleep`，不会正常的去执行任务。但是，通常情况下，

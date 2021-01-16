# 冒泡排序算法

时间复杂度O(𝑛²)

```java
public static void main(String[] args) {
    int a[] = new int[]{18,8,15,9,20,5,3,8,1};

    for (int i = 1, n = a.length; i < n; i++) {
        for (int j = 0; j < n - 1; j++) {
            if (a[j] > a[j+1]) {
                int temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }

    for (int i : a) {
        System.out.println(i);
    }
}
```
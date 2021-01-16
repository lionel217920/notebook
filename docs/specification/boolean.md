# 布尔类型用作属性时的注意事项

```java
public class StudentModule implements Serializable {
    private static final long serialVersionUID = 2337227050828958671L;
    
    private boolean isVip;
    
    private boolean vip;
    
    private Boolean isMan;
    
    private Boolean man;

    public boolean isVip() {
        return isVip;
    }

    public void setVip(boolean vip) {
        isVip = vip;
    }

    public Boolean getMan() {
        return isMan;
    }

    public void setMan(Boolean man) {
        isMan = man;
    }
}
```
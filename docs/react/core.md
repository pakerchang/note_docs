React render phase
![rc list](./assets/rc-list.png)

- 根據 React Fiber 與 JSX 在首次渲染的情境下
  專案的檔案結構應該要有一層 List Component 用於表述頁面的 Component Structure
  並在此層決定哪些應該要 lazy, suspense 或是 useTransition 降低渲染權重

# Portal 實踐方式
 
- 如何在 Portal Component 創建時掛載到 `html body` 底下
- 如何解決掛載組件開閉狀態問題
- 掛載與卸載的生命週期處理


`rcPortal.tsx`
目前看來是以索引 DOM 的方式得到節點後建立 element 再透過 react 進行渲染
不管是開啟或關閉 portal 都是

整體來說並沒有什麼太過複雜的實踐形式
需要確認的問提示

1. notification message components
2. error handling
3. rollup packages
4. componentProps define

# eslint

## Rules file
每一個 rules file 都需要遵照 export structure
```ts
import { Rule } from 'eslint'
const rule: Rule.RuleModule = {
   meta:{},
   create: (node, context) => {}
}

export default rule
```
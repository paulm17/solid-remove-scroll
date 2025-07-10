<div align="center">
  <h1>Solid-remove-📜</h1>
  <br/>
   dont even scroll
  <br/>
</div> 

solid-remove-scroll
====

Disables scroll outside of `children` node.

- 🖱 mouse and touch devices friendly
- 📈 vertical and horizontal
- 📜 removes document scroll bar maintaining it space
- ✅ support nested scrollable elements
- 🕳 supports solid-portals (uses solid Event system)
- ☠️ it could block literally any scroll anywhere

# Usage
Just wrap content, which should be scrollable, and everything else would not. 
```js
import {RemoveScroll} from 'solid-remove-scroll';

<RemoveScroll>
  Only this content would be scrollable
</RemoveScroll>  
```

`RemoveScroll` accept following props
- `children`
- `[enabled]` - activate or deactivate component behaviour without removing it.
- `[allowPinchZoom=false]` - enabled "pinch-n-zoom" behavior. By default it might be prevented. However - pinch and zoom might break "scroll isolation", and __disabled by default__.
- `[noRelative=false]` - prevents setting `position: relative` on the body.
- `[noIsolation=false]` - disables outer event capturing. Event capturing is solid friendly and unlikely be a problem.
But if you are using _shadowbox_ of some sort - you dont need it.
- `[inert=false]` - ☠️(be careful) disables events the rest of page completely using `pointer-events` except the Lock(+shards). 
solid portals not friendly, might lead to production issues. Enable only for __rare__ cases, when you have to disable scrollbars somewhere on the page(except body, Lock and shards).  
- `[forwardProps]` - will forward all props to the `children`
- `[className]` - className for an internal div
- `[removeScrollBar]` - to control scroll bar removal. Set to false, if you prefer to keep it (wheel and touch scroll is still disabled).

# Size
- (🧩 full) 1.7kb after compression (excluding tslib).
---
- (👁 UI) __400b__, visual elements only
- (🚗 sidecar) 1.5kb, side effects

# Release

Matches: v2.7.1

# License
MIT


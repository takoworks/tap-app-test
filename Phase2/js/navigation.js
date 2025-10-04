// js/navigation.js
export function nextIndex(current, length) {
    return (current + 1) % length; // 末尾の次で先頭へ戻る
  }
  
  export function prevIndex(current, length) {
    return (current - 1 + length) % length; // 先頭の前で末尾へ戻る
  }
  
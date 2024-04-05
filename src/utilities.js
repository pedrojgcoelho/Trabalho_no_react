export function getNewExpirationTime(timeToLive=1) {
    return Date.now() + timeToLive * 1000;
  }
  
  let nextId = 0;
  export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
  }

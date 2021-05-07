const servers = [
  { name: 'Lithuania #1', distance: 0 },
  { name: 'Lithuania #87', distance: 10 },
  { name: 'Germany #12', distance: 654 },
]

export default function request() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve(servers)
    })
  })
}

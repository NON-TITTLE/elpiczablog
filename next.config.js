module.exports = {
  async rewrites() {
    return [
      {
        source: '/.well-known/nostr.json',
        destination: '/nostr.json',
      },
    ];
  },
};

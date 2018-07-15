// import recReaddir from 'recursive-readdir'

export default function importAll(r) {
  // todo: how to resolve the restrict of that "The arguments passed to require.context must be literals!"
  return r.keys().map(r);
}

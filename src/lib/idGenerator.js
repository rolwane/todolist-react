function idGenerator() {
  let id = String(Math.round(Math.random() * 9999999999));

  if (id.length < 10) {
    for (let i = 0; i < (11 - id.length); i += 1) {
      id += '0';
    }
  }

  return Number(id);
}

export default idGenerator;

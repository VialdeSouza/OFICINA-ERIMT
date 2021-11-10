export default class ServiceTask {
  async getTasks() {
    return [
      { id: 1, description: "Limpar o quintal", status: "todo" },
      { id: 0, description: "Comprar maçã, banana e tomate", status: "done" },
    ];
  }
}

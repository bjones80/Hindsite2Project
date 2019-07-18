"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientService = /** @class */ (function () {
    //clientChangedEvent = new Subject<Client[]>();
    //clients: Client[] = [];
    //maxId: number;
    function ClientService(http) {
        this.http = http;
        //this.maxId = this.getMaxId();
    }
    ClientService.prototype.getClients = function () {
        return this.http.get('http://localhost:3000/api/clients');
    };
    ClientService.prototype.getClient = function (companyName) {
        return this.http.get('http://localhost:3000/api/clients' + companyName);
    };
    ClientService.prototype.insertClient = function (client) {
        return this.http.post('http://localhost:3000/api/clients', client);
    };
    ClientService.prototype.updateClient = function (client) {
        return this.http.put('http://localhost:3000/api/clients/' + client.companyName, client);
    };
    ClientService.prototype.deleteClient = function (companyName) {
        return this.http.delete('http://localhost:3000/api/clients/' + companyName);
    };
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map
import { TestBed } from '@angular/core/testing';
import { HttpServiceService } from './http-service.service';
describe('HttpServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HttpServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-service.service.spec.js.map
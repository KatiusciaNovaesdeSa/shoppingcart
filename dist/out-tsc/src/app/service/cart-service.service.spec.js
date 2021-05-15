import { TestBed } from '@angular/core/testing';
import { CartServiceService } from './cart-service.service';
describe('CartServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CartServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cart-service.service.spec.js.map
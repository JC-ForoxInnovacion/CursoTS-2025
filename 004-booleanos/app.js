"use strict";
(() => {
    let myBoolean = true;
    console.log({ myBoolean });
    myBoolean = (5 + 2) > 0;
    console.log('( 5 + 2 ) > 0', { myBoolean });
    myBoolean = (5 + 2) < 0;
    console.log('( 5 + 2 ) < 0', { myBoolean });
    myBoolean = ("1" == 1);
    console.log('("1" == 1):', { myBoolean });
    myBoolean = ("1" === 1);
    console.log('("1" === 1):', { myBoolean });
})();
//# sourceMappingURL=app.js.map
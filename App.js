Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    mySimpleArray: ['Jerry', 'Kate', 'Rick', 'Sam'],
    myNestedArray: [
        { Name: 'Jerry', Age: '53', Sex: 'Male', Location: 'Plymouth' },
        { Name: 'Kate', Age: '50', Sex: 'Female', Location: 'Portland' },
        { Name: 'Rick', Age: '43', Sex: 'Male', Location: 'Nuneaton' },
        { Name: 'Sam', Age: '33', Sex: 'Female', Location: 'Nuneaton' },
    ],
    launch: function() {
        this._myMethod();
    },


    _myMethod: function() {
        console.log(this.myNestedArray[1].Name)
    },


});
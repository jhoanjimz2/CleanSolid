(() => {

    // No aplicando el principio de responsabilidad unica

    type Gender = 'M' | 'F'

    class Person {

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) {}
    }


    // const newPerson = new Person('Jhoan', 'M', new Date('1997-07-03'))
    // console.log({ newPerson })


    class User extends Person {
        private lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string, 
            gender: Gender, 
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    class UserSettings extends User {
        
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string, 
            gender: Gender, 
            birthdate: Date
        ) {
            super(email,role, name, gender, birthdate);
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'jhoanjimz2@gmail.com',
        'Admin',
        'Jhoan',
        'M',
        new Date('1997-03-07')
    )

    console.log({ userSettings })

    

})();
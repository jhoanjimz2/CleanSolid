(() => {

    // Aplicando el principio de responsabilidad unica.
    // Priorizar la composición frente a la herencia!

    type Gender = 'M' | 'F'

    interface PersonProps {
        name      : string;
        gender    : Gender;
        birthdate : Date;
    }
    class Person {
        public name      : string;
        public gender    : Gender;
        public birthdate : Date;
        constructor({ name, gender, birthdate}: PersonProps) {
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email     : string;
        role      : string;
    }
    class User {
        public lastAccess : Date;
        public email      : string;
        public role       : string;
        constructor({ email, role}: UserProps ) {
            this.lastAccess = new Date();
            this.email      = email;
            this.role       = role;
        }
        checkCredentials() { return true; }
    }

    interface SettingsProps {
        workingDirectory : string;
        lastOpenFolder   : string;
    }
    class Settings {
        public lastOpenFolder   : string;
        public workingDirectory : string;
        constructor({ workingDirectory, lastOpenFolder}: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory : string;
        lastOpenFolder   : string;
        email            : string;
        role             : string;
        name             : string;
        gender           : Gender;
        birthdate        : Date
    }
    class UserSettings {
        public person   : Person;
        public user     : User;
        public settings : Settings;
        constructor({
            name, gender, birthdate, 
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingsProps) {
            this.person   = new Person({ name, gender, birthdate });
            this.user     = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    const userSettings = new UserSettings({
        workingDirectory :'/usr/home',
        lastOpenFolder :'/home',
        email :'jhoanjimz2@gmail.com',
        role :'Admin',
        name :'Jhoan',
        gender :'M',
        birthdate :new Date('1997-03-07')
    })

    console.log({ userSettings });

})();
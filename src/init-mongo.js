db.createUser({
    user: 'root',
    pwd: 'Rollercoin2023',
    roles: [
        {
            role: 'admin',
            db: 'paradox-db',
        }
    ],
})

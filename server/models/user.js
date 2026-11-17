function getUsers() {
    return [
        {
            User_ID: 1,
            First_Name: "John",
            Last_Name: "Smith",
            Email: "john@example.com"
        },
        {
            User_ID: 2,
            First_Name: "Jane",
            Last_Name: "Doe",
            Email: "jane@example.com"
        }
    ];
}

module.exports = {
    getUsers
};
export default class userDTO {
    static getUserInputFrom = (user) => {
        const objectId_ = user.cart[0]._id;

        // Extract the hexadecimal representation
        const hexString = objectId_.toHexString();
        return {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            age: user.age,
            email: user.email,
            cart: hexString,
            role: user.role,
        }
    }
}
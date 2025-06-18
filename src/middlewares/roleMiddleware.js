const authozizeRoles =(...allowedRoles)=>{

    return (req, res, next) => {
        if (!req.user) {
            return res.status(403).json({ message: "Access denied. No user found." });
        }

        const userRole = req.user.role;

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: `Access denied. User role '${userRole}' is not allowed.` });
        }

        next();
    };
}

module.exports =authozizeRoles;
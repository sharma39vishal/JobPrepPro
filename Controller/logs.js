const Logs = require("../Model/LogsModel");

exports.Recordlog =(props) => {
    // console.log(props);
    const newlog = new Logs({user_id:props.user_id,what:props.what,created_at:props.created_at});
    newlog.save().then(() => console.log("Log Added!"))
        .catch((err) => console.log("Error: " + err)); 
};
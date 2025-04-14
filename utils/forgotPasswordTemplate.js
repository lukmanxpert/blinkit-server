const forgotPasswordTemplate = ({name, otp}) => {
  return `
        <div>
            <p>Dear, ${name}</p>
            <p>You have requested for password reset. Please follow this otp code for reset your password.</p>
            <div style="background: red; color: white; padding: 5px 10px; margin: 10px 0; border-radius: 15px; font-size: 20px; font-weight: bold;">
                ${otp}
            </div>
            <p>This otp is valid for 1hr only. Enter this otp in the BlinkIt website to process with resetting your password.</p>
            </br>
            </br>
            <p>Thanks</p>
            <p>BlinkIt</p>
        </div>
    `;
};

export default forgotPasswordTemplate;

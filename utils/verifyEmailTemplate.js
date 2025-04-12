const verifyEmailTemplate = ({name, url}) => {
  return `
    <p>Dear ${name},</p>
    <p>Thank you for registering BlinkIt</p>
    <a href=${url} style="color: white; background:blue; margin-top: 10px; padding: 5px 10px; border-radius: 10px">
        Verify Email
    </a>
    `;
};

export default verifyEmailTemplate;

"use strict";

const { default: axios } = require("axios");
const { emailTemplate } = require("./email-template");
const { createTransport } = require("nodemailer");

let transporter;
let sgMail;

if (process.env.EMAIL_METHOD !== "API") {
  // SMTP
  transporter = createTransport({
    pool: true,
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // use TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Mailer is ready.");
    }
  });
} else {
  // API
  console.log("Mailer on API mode.");
  sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.EMAIL_API_KEY);
}

/**
 * `notificationEmail` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    // before request
    const result = await next();
    // after request
    try {
      const { name, email, subject, message } = ctx?.request?.body?.data;

      const { emailHtml, emailText } = emailTemplate(
        name,
        email,
        subject,
        message
      );

      const emailConfig = {
        from: `${process.env.EMAIL_NOTIFICATIONS_FROM_NAME} <${process.env.EMAIL_NOTIFICATIONS_FROM}>`,
        to: `${process.env.EMAIL_TO_FORWARD_NAME} <${process.env.EMAIL_TO_FORWARD}>`,
        subject: "Novo pedido de contacto",
        text: emailText,
        html: emailHtml,
      };

      if (process.env.EMAIL_METHOD !== "API") {
        // SMTP
        await transporter.sendMail(emailConfig);
      } else {
        // API
        await sgMail.send(emailConfig);
      }

      //   Content: {
      //     Simple: {
      //       Body: {
      //         Html: {
      //           Data: emailHtml,
      //         },
      //         Text: {
      //           Data: emailText,
      //         },
      //       },
      //       Subject: {
      //         Data: "Novo pedido de contacto",
      //       },
      //     },
      //   },
      //   Destination: {
      //     ToAddresses: [
      //       `${process.env.EMAIL_TO_FORWARD_NAME} <${process.env.EMAIL_TO_FORWARD}>`,
      //     ],
      //   },
      //   FromEmailAddress: `${process.env.EMAIL_NOTIFICATIONS_FROM_NAME} <${process.env.EMAIL_NOTIFICATIONS_FROM}>`,
      // });
    } catch (err) {
      console.log("Error sending email.");
      console.log(err);
      throw err;
    }
    return result;
  };
};

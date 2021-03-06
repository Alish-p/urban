export const welcomeMessage = (name) => {
  return encodeURI(`
Hi ${name},
Thank You for being an Urban Read member !
We sincerely value your decision to continue to be a part of our family. Please do not hesitate if you need any help.

Please Note:

1)
Wifi Username : urbanread
Wifi Password : urbanread@palanpur

2)
Wifi Username : urbanread2
Wifi Password : urbanread2@palanpur

Please save this number (84016 99646) in order to recieve all the updates.

All the Best ,
UrbanRead Library`);
};

export const renewMessage = (name, expireDate) => {
  return encodeURI(`
Hi ${name},

Thank you for being a part of our UrbanRead community. We hope you’ve been able to enjoy all the benefits of your membership.
  
Your membership is expiring on *${expireDate}*.

Please renew your membership to continue using the benefits.
We’re excited to have you back!

And, We would really love your feedback. Post a review to our profile.
https://g.page/r/CWcsNBy2kvrSEB0/review
  
Regards,
UrbanRead Library`);
};

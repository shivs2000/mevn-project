 var sign = crypto.createSign('RSA-SHA1')
  , privatepem = fs.readFileSync('./pk-APKAIGEE5LO5NXQ427TA.pem')
  , privatekey = privatepem.toString('ascii')
  ,publicpem= fs.readFileSync('./pub.pem')
  ,publickey=publicpem.toString('ascii');
  console.log(privatekey);


  console.log(publickey);
  const cloudFront = new AWS.CloudFront.Signer(
    'APKAIGEE5LO5NXQ427TA',
    privatekey,

  );

  const policy = JSON.stringify({
    Statement: [
      {
        Resource: '	dpdep6in0ople.cloudfront.net', // http* => http and https
        Condition: {
          DateLessThan: {
            'AWS:EpochTime':
              Math.floor(new Date().getTime() / 1000) + 60 * 60 * 1, // Current Time in UTC + time in seconds, (60 * 60 * 1 = 1 hour)
          },
        },
      },
    ],
  });













  const cookie = cloudFront.getSignedCookie({
      policy:policy
    });


  console.log(cookie);

    res.cookie('CloudFront-Key-Pair-Id',cookie['CloudFront-Key-Pair-Id'], {
      domain: '	dpdep6in0ople.cloudfront.net',
      path: '/',
      httpOnly: true,
    });

    res.cookie('CloudFront-Policy',cookie['CloudFront-Policy'] , {
      domain: '	dpdep6in0ople.cloudfront.net',
      path: '/',
      httpOnly: true,
    });

    res.cookie('CloudFront-Signature', cookie['CloudFront-Signature'], {
      domain: '	dpdep6in0ople.cloudfront.net',
      path: '/',
      httpOnly: true,
    });

  console.log(cookie);

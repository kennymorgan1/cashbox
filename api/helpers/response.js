const express = require('express');

// exports.errorResponse = function(res, message, status) {
//   res.status(code || 500).json({
//     status,
//     message
//   })
// };

exports.Response = function(res, message, status, data) {
  res.status(code).json({
    status,
    message,
    data
  })
}

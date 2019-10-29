const express = require('express');

exports.Response = function(res, message, status, data) {
  return res.status(status).json({
    status,
    message,
    data
  })
}

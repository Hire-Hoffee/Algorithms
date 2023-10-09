module.exports = function (orders) {
  let time = 0;
  let ordersCount = 0;

  orders.sort((a, b) => a.executionTime - b.executionTime);
  orders.forEach((order) => {
    if (time + order.executionTime <= order.expiredAt) {
      time += order.executionTime;
      ordersCount += 1;
    }
  });

  return ordersCount;
};

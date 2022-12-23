const GetListAPI = function (app) {
  app.get("/vms/dms/v1/devices/", (req, res) => {
    try {
      const { device_id } = req.body;
      let body = {
        message: `Device: ${device_id}`,
        items: ["Camera1", "Camera2", "Camera3"],
      };

      res.json(body);
    } catch (error) {
      res.send(error);
    }
  });
};

module.exports = GetListAPI;

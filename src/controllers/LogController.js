import { createLogService, getActivityLogService } from "../services/LogService.js";

export const saveLog = (date, user, action, resource, data) => {
  const log = {
    date,
    user,
    action,
    resource,
    data
  };

  createLogService(log);
}

export const getActivityLogs = async (req, res) => {
  try {
    const logs = await getActivityLogService();

    res.status(200).send({
      logs
    });
  } catch (err) {
    res.status(500).send({
      message: err.message
    })
  }
}
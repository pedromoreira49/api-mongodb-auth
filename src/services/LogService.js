import Log from '../models/LogModel.js'

export const createLogService = (body) => Log.create(body);

export const getActivityLogService = () => Log.find();
import Work from '../models/WorkModel.js'

export const createWorkService = (body) => Work.create(body);

export const findByIdService = (id) => Work.findById(id);
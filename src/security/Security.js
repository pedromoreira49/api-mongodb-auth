export const permissions = {
  Employee: {
    works: ['create']
  },
  manager: {
    customers: ['create', 'update'],
    works: ['create', 'update'],
    stock: ['create', 'update'],
  },
  admin: {
    customers: ['create', 'update', 'softDelete'],
    works: ['create', 'update', 'softDelete'],
    stock: ['create', 'update', 'softDelete']
  }
}
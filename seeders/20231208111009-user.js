'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'syifa',
        role: 'user',
        membership: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'gilang',
        role: 'user',
        membership: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'alucard',
        role: 'user',
        membership: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'yuzhong',
        role: 'user',
        membership: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'khaled',
        role: 'user',
        membership: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'gord',
        role: 'user',
        membership: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'layla',
        role: 'user',
        membership: 'free',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])

    const idSyifa = await queryInterface.rawSelect(
      'Users',
      {
        where: { name: 'syifa' },
      },
      ['id'],
    )

    const idGilang = await queryInterface.rawSelect(
      'Users',
      {
        where: { name: 'gilang' },
      },
      ['id'],
    )

    const idAlucard = await queryInterface.rawSelect(
      'Users',
      {
        where: { name: 'alucard' },
      },
      ['id'],
    )

    const idYuzhong = await queryInterface.rawSelect(
      'Users',
      {
        where: { name: 'yuzhong' },
      },
      ['id'],
    )

    const idKhaled = await queryInterface.rawSelect(
      'Users',
      {
        where: { name: 'khaled' },
      },
      ['id'],
    )

    const idGord = await queryInterface.rawSelect(
      'Users',
      {
        where: { name: 'gord' },
      },
      ['id'],
    )

    const idLayla = await queryInterface.rawSelect(
      'Users',
      {
        where: { name: 'layla' },
      },
      ['id'],
    )

    await queryInterface.bulkInsert('Auths', [
      {
        email: 'syifa@gmail.com',
        password:
          '$2a$12$2rzIPBQAoT1x7KffKJxK9.DepLKRm3m9b4NUjSbkGLMKIHO.Ic8pa',
        phoneNumber: 6288716534418,
        userId: idSyifa,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'gilang@gmail.com',
        password:
          '$2a$12$9XnO4utoWFrcS3.tt7BOv.Goft4eA87Yu/3N38F1JBs7C8PLKfPzS',
        phoneNumber: 6288716534418,
        userId: idGilang,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'alucard@gmail.com',
        password:
          '$2a$12$pTvbwdBuVmEHdIPhfiyNK.5dC3UC4yWgSoy72iRJ1sdCYGiBFh4I.',
        phoneNumber: 6288716534418,
        userId: idAlucard,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'yuzhong@gmail.com',
        password:
          '$2a$12$b2et7D1IjIT9kSuqTLmIIOZonkwG6.vHGCZcSMCR9VXqIMGRogt5y',
        phoneNumber: 6288716534418,
        userId: idYuzhong,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'khaled@gmail.com',
        password:
          '$2a$12$GTJe4dCkLW22GAbe/ngcie7AZ0AjAIXZ3YmtzwBJZKh8oiiFhhKuq',
        phoneNumber: 6288716534418,
        userId: idKhaled,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'gord@gmail.com',
        password:
          '$2a$12$KtWBWWQRo6yUZ5rfbCUjg.j640R8xRj/WhqYRcTM4l8p7Fx98g.em',
        phoneNumber: 6288716534418,
        userId: idGord,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'layla@gmail.com',
        password:
          '$2a$12$sOzHt5uBFRVUmmPh2NqXquqVmOzP3ocAyoGp29WA3xIkl..43PQGe',
        phoneNumber: 6288716534418,
        userId: idLayla,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('Auths', null, {})
  },
}

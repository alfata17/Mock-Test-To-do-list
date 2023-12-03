const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

module.exports = {
    async get(req, res){
        try {
          const { search, page = 1, limit = 10 } = req.query;
          console.log(req.query);
          let result = await prisma.data.findMany({
              skip: (page - 1) * limit,
              take: limit,
          })
          if(!result.length) {
              return res.status(200).json({ 
                  status: 'success', 
                  code: 200, 
                  message: 'Data Empty'
              })
          }
          
          return res.status(200).json({ 
              status: 'success', 
              code: 200, 
              message: 'Success!',
              data: result
          })
          } catch (error) {
            console.error(error);
            return res.status(500).json({
              status: 'error',
              code: 500,
              message: 'Internal Server Error',
            });
          }
    },

    async getById(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })
    
        const data = await prisma.data.findUnique({
            where: {id: parseInt(req.params.id),},
            include: { user: true },
            });
    
        res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: data
        })
    },
    async create(req, res){
        const { isi_data, status_data } = req.body;
        const userId = req.user.id;
        const data = await prisma.data.create({
            data: { 
                isi_data,
                status_data,
                userId
             }
        });

        res.status(201).json({ 
            status: 'success', 
            code: 200, 
            message: 'Data ditambahkan!',
            data: data
        })
    },
    async update(req, res){
        const data = await prisma.data.update({
            where: {
              id: parseInt(req.params.id), // Sesuaikan dengan nama kolom ID yang digunakan di model Prisma
            },
            data: {
              ...req.body
            },
          });

        res.status(201).json({ 
            status: 'success', 
            code: 200, 
            message: 'Data diupdate!',
            data: data
        })
    },
    async destroy(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })
    
        const data = await prisma.data.delete({
            where: {
                id: parseInt(req.params.id), // Ubah sesuai kebutuhan, tergantung pada field id di tabel Anda
              },
        })
    
        res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success Data terhapus!',
        })
    },
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MOD_TrainingService.Context;
using MOD_TrainingService.Models;

namespace MOD_TrainingService.Repositories
{
    public class TrainingsRepository : ITrainingsRepository
    {
        private readonly TrainingContext _context;
        public TrainingsRepository(TrainingContext context)
        {
            _context = context;
        }
        public void AddTrainings(Training item)
        {
            try
            {
                _context.trainings.Add(item);
                _context.SaveChanges();
            }
            catch(Exception e)
            {
                throw e;
            }
            
        }

        public void EditTraining(Training item)
        {
            try
            {
                _context.Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.SaveChanges();
            }
             catch (Exception e)
            {
                throw e;
            }
        }

        public List<Training> GetTrainingByMentorId(int id)
        {
            try
            {
                return _context.trainings.Where(i => i.UserId == id).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<Training> GetTrainingByUserId(int id)
        {
            try
            {
                return _context.trainings.Where(i => i.UserId == id).ToList();
            }
             catch (Exception e)
            {
                throw e;
            }
        }

        public List<Training> GetTrainings()
        {
            try
            {
                return _context.trainings.ToList();
            }
            
             catch (Exception e)
            {
                throw e;
            }
        }
    }
}

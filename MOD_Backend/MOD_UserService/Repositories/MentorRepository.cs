using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MOD_UserService.Context;
using MOD_UserService.Models;

namespace MOD_UserService.Repositories
{
    public class MentorRepository : IMentorRepository
    {
        private readonly UserContext _context;
        public MentorRepository(UserContext context)
        {
            _context = context;
        }
        public void AddMentor(Mentor item)
        {
            try
            {
                _context.Mentors.Add(item);
                _context.SaveChanges();
            }
            catch(Exception e)
            {
                throw e;
            }
            
        }

        public void BlockMentor(int id)
        {
            try
            {
                var item = _context.Mentors.Find(id);
                item.MentorActive = !(item.MentorActive);
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch(Exception e)
            {
                throw e;
            }
           
        }
        public void DeleteMentor(int Id)
        {
            try
            {
                var item = _context.Mentors.Find(Id);
                _context.Mentors.Remove(item);
                _context.SaveChanges();
            }
            catch(Exception e)
            {
                throw e;
            }
            
        }

        public List<Mentor> GetAll()
        {
            try
            {
                return _context.Mentors.ToList();
            }
            catch(Exception e)
            {
                throw e;
            }
            
        }

        public Mentor GetById(int Id)
        {
            try
            {
                return _context.Mentors.Find(Id);
            }
            catch(Exception e)
            {
                throw e;
            }
            
        }

       
        public void UpdateMentorPassword(string email,string password)
        {
            try
            {
                var item = _context.Mentors.SingleOrDefault(i => i.MentorEmail == email);
                item.MentorPassword = password;
                _context.Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.SaveChanges();
            }
            catch(Exception e)
            {
                throw e;
            }
            
        }
    }
}

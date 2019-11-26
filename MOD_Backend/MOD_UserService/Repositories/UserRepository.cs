using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MOD_UserService.Context;
using MOD_UserService.Models;

namespace MOD_UserService.Repositories
{
    public class UserRepository : IUserRepository
    {

        private readonly UserContext _context;
        public UserRepository(UserContext context)
        {
            try
            {
                _context = context;
            }
            catch(Exception e)
            {
                throw e;
            }
           
        }
        public void AddUser(User item)
        {
            try
            {
                _context.Users.Add(item);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }

        }

        public void BlockUser(int Id)
        {
           try
            {
                var item = _context.Users.Find(Id);
                item.UserActive = !(item.UserActive);
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }

        }

        public void DeleteUser(int Id)
        {
            try
            {
                var item = _context.Users.Find(Id);
                _context.Users.Remove(item);
                _context.SaveChanges();
            }
           
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<User> GetAll()
        {
            try
            {
                return _context.Users.ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public User GetById(int Id)
        {
            try
            {
                return _context.Users.Find(Id);
            }
             catch (Exception e)
            {
                throw e;
            }
        }

        public List<Mentor> SearchMentor(string MentorSkills)
        {
            //return _context.Mentors.Find(MentorSkills);
            try
            {
                return _context.Mentors.Where(i => i.MentorSkills == MentorSkills).ToList();
            }
            catch (Exception e)
            {
                throw e;
            }


        }

        public void UpdateUserPassword(string email,string password)
        {
            try
            {
                var item = _context.Users.SingleOrDefault(i => i.UserEmail == email);
                item.UserPassword = password;
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();
            }
             catch (Exception e)
            {
                throw e;
            }
        }

        
    }
}

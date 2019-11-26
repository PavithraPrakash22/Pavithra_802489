using MOD_AuthenticationService.Context;
using MOD_AuthenticationService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD_AuthenticationService.Repositories
{
    public class LoginRepository : ILoginRepository
    {
        private readonly LoginContext _context;
        public LoginRepository(LoginContext context)
        {
            _context = context;
        }
        public Mentor MentorLogin(string MentorEmail, string MentorPassword)
        {
            try
            {
                return _context.Mentors.SingleOrDefault(data => data.MentorEmail == MentorEmail && data.MentorPassword == MentorPassword);
            }
            catch (Exception e)
            {
                throw e;
            }//if (obj != null)
            //    return true;
            //else
            //    return false;
        }

        public User UserLogin(string UserEmail, string UserPassword)
        {
            try
            {
                return _context.Users.SingleOrDefault(data => data.UserEmail == UserEmail && data.UserPassword == UserPassword);
            }
            catch (Exception e)
            {
                throw e;
            }//if (obj != null)
            //    return true;
            //else
            //    return false;

        }
    }
}

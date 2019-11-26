using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MOD_PaymentService.Context;
using MOD_PaymentService.Models;

namespace MOD_PaymentService.Repositories
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly PaymentContext _context;
        public PaymentRepository(PaymentContext context)
        {
            _context = context;
        }
        public void AddPayment(Payment item)
        {
            try
            {
                _context.Payments.Add(item);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void DeletePayment(int id)
        {
            try
            {
                var item = _context.Payments.Find(id);
                _context.Payments.Remove(item);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<Payment> GetAllPayment()
        {
            try
            {
                return _context.Payments.ToList();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void UpdatePayment(Payment item)
        {
            try
            {
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

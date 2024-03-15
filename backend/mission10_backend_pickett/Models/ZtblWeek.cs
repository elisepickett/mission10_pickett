using System;
using System.Collections.Generic;

namespace mission10_backend_pickett.Models;

public partial class ZtblWeek
{
    public DateOnly WeekStart { get; set; }

    public DateOnly? WeekEnd { get; set; }
}

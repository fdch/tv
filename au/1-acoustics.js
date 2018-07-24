var logten = 2.302585092994;

function mtof(f)
{
    if (f <= -1500) return(0);
    else if (f > 1499) return(mtof(1499));
    else return (8.17579891564 * Math.exp(.0577622650 * f));
}

function ftom(f)
{
    return (f > 0 ? 17.3123405046 * Math.log(.12231220585 * f) : -1500);
}

function powtodb(f)
{
    if (f <= 0) return (0);
    else
    {
        let val = 100 + 10./logten * Math.log(f);
        return (val < 0 ? 0 : val);
    }
}

function rmstodb(f)
{
    if (f <= 0) return (0);
    else
    {
        let val = 100 + 20./logten * Math.log(f);
        return (val < 0 ? 0 : val);
    }
}

function dbtopow(f)
{
    if (f <= 0)
        return(0);
    else
    {
        if (f > 870)
            f = 870;
        return (Math.exp((logten * 0.1) * (f-100.)));
    }
}

function dbtorms(f)
{
    if (f <= 0)
        return(0);
    else
    {
        if (f > 485)
            f = 485;
    }
    return (Math.exp((logten * 0.05) * (f-100.)));
}
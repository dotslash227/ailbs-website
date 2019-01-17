# Generated by Django 2.1.1 on 2018-09-20 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0002_registration_plan'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='accompanying_age',
            field=models.IntegerField(default=0, verbose_name='Age of Accompanying Person, if any'),
        ),
        migrations.AlterField(
            model_name='registration',
            name='accompanying_gender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], default='Male', max_length=15, verbose_name='Gender of accompanying person, if any'),
        ),
        migrations.AlterField(
            model_name='registration',
            name='accompanying_name',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Name of Accompanying Person, if any'),
        ),
        migrations.AlterField(
            model_name='registration',
            name='accompanying_registration_number',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Medical Council Registration Number of accompanying person, if any'),
        ),
        migrations.AlterField(
            model_name='registration',
            name='accompanying_title',
            field=models.CharField(blank=True, choices=[('Dr.', 'Dr.'), ('Mr.', 'Mr.'), ('Mrs.', 'Mrs.'), ('Ms.', 'Ms.'), ('Sir', 'Sir')], max_length=4, null=True, verbose_name='Accompanying Person Title'),
        ),
        migrations.AlterField(
            model_name='registration',
            name='gender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], default='Male', max_length=10),
        ),
        migrations.AlterField(
            model_name='registration',
            name='registration_number',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Medical Council Registration Number'),
        ),
        migrations.AlterField(
            model_name='registration',
            name='title',
            field=models.CharField(choices=[('Dr.', 'Dr.'), ('Mr.', 'Mr.'), ('Mrs.', 'Mrs.'), ('Ms.', 'Ms.'), ('Sir', 'Sir')], max_length=4),
        ),
    ]

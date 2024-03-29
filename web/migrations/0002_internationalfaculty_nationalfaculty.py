# Generated by Django 2.1.1 on 2018-09-19 10:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='InternationalFaculty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('country', models.CharField(max_length=150)),
                ('image', models.FileField(max_length=250, upload_to='faculties')),
                ('cv', models.FileField(max_length=250, upload_to='faculties/cv')),
            ],
        ),
        migrations.CreateModel(
            name='NationalFaculty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
            ],
        ),
    ]

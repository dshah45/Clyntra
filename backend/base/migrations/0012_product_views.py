# Generated by Django 3.2.6 on 2021-09-25 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_contact'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='views',
            field=models.IntegerField(default=0),
        ),
    ]
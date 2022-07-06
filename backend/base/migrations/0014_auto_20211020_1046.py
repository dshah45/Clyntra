# Generated by Django 3.2.6 on 2021-10-20 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_order_discount'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='sizes',
            field=models.CharField(choices=[('S', 'S'), ('M', 'M'), ('L', 'L')], default='S', max_length=5),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='sizes',
            field=models.CharField(choices=[('S', 'S'), ('M', 'M'), ('L', 'L')], default='S', max_length=5),
        ),
        migrations.AddField(
            model_name='product',
            name='sizes',
            field=models.CharField(choices=[('S', 'S'), ('M', 'M'), ('L', 'L')], default='S', max_length=5),
        ),
    ]